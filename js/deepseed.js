// DEEP SEED
// infinitly layered generator

var DeepSeed = {

	templates : [],
	renderers : [],

	RegisterTemplate : function(aObject)
	{
		// Name : name of template
		// Tags : template tags
		// Renderer : custom renderer name
		// Data :  function that returns a built object
		this.templates.push(aObject);
	},

	RegisterRenderer : function(aFunction)
	{
		this.renderers.push(aFunction);
	},
	
	// recursive function used to build a template, and any generators inside that template
	// - aTemplateName = required template name
	// - aTags = required tags
	// - aPassThroughOptions = optional passthrough options for the template to use when compiled
	// - aFallback = fallback function to run incase no template is found
	// - return = outputs an OBJECT containing the final proccessed data
	Generate : function(aRequestID, aRequestTags, aParams)
	{
		// find template
		var BestTemplate = this.FindTemplate(aRequestID, aRequestTags);
		
		if (BestTemplate == null)
		{
			console.error("Error: no template found for: "+aRequestID);
		 	return;
		}
		
		// update params
		var newParams = Object.assign({}, aParams); // copy params
		newParams._TemplateID = BestTemplate.ID;
		newParams._TemplateTags = BestTemplate.Tags;
		newParams._TemplateRenderer = BestTemplate.Renderer;
		//if ( !("Path" in aParams) || typeof(aParams.Path) === undefined || aParams._Path == null || aParams._Path == "")
		//{
		//	newParams._Path = aPrams._Key;
		//}
		//else
		//{
		//	newParams._Path = aParams._Path + "." + aPrams._Key;
		//}

		//console.log("template: "+BestTemplate.Name);
		//console.log("name: "+newParams.Name);
		//console.log("path: "+newParams.Path);

		// build object
		var result = null;
		try 
		{
			result = BestTemplate.Data(newParams);	
		}
		catch (exception)
		{
			console.error("EXCEPTION (Template Data): "+exception.message);
			
			if (exception instanceof TypeError)
			{
				console.error("TypeError: potentialy caused by an invalid template: "+BestTemplate.Name);
				return null;
			}
		}
		
		var wrapper = {};
		wrapper._Result = result;
		wrapper._Params = newParams;
		return wrapper;
	},

	// find the best template based on name OR tags
	// - aTemplateName = required template name
	// - aTags = required tags
	// - return = output the most applicable template
	FindTemplate : function(aRequestID, aRequestTags)
	{
		//console.log("info: finding template: "+aTemplateName);
		var BestTemplate = null;

		if (this.templates.length < 0)
		{
			console.error("Error: no templates registered.");
			return;
		}

		if (aRequestID != null && aRequestID != "")
		{
			//console.log("info: template name found, ignoring tagss");
			for (var i = 0; i < this.templates.length; i++)
			{
				var item = this.templates[i];
				
				// matched ID
				if (aRequestID == item.ID)
				{
					BestTemplate = item;
					break;
				}
			}
		}
		else
		{
			//console.log("info: no template name input, trying tags.");
			if (aRequestTags != null && aRequestTags.isArray() && aRequestTags.length > 0)
			{
				var _bestScore = 0;
				var _bestTemplate = null;

				// for each requested tag
				for (Rtag in aRequestTags)
				{
					// for each template
					for (item in this.templates)
					{
						var score = 0;
						// for each template tag
						for (Ttag in item.Tags)
						{
							if (Rtag == Ttag)
							{
								score++;
							}
						}

						// is this template bettter then the current best?
						if (scsore > _bestScore)
						{
							_bestTemplate = item;
						}
					}
				}

				// most matching tags
				BestTemplate = _bestScore;
			}
			else
			{
				console.error("Error: no template name or tags input");
				return null;
			}
		}
		
		//console.log("info: found template");
		//console.log(BestTemplate);
		return BestTemplate;
	},

	// build objects into html
	Render(aObject)
	{
		// object must exist
		if (aObject == null) return;

		//console.log("RENDERING:");
		//console.log(aObject);

		var output = '';

		var obj_type = typeof(aObject);
		if (Array.isArray(aObject))
		{
			obj_type = "array";
		}

		//console.log("object type: " + obj_type);
		switch (obj_type)
		{
			case "array":
			{
				output += '<div class="array">';
				for (var i = 0; i < aObject.length; i++)
				{
					output += `<div class="item" data-index="${i}">`;
					output += this.Render(aObject[i]); // item value
					output += '</div>';
				}
				output += '</div>';
			}
			break;

			// object with properties
			case "object":
			{
				output += `<div class="object">`;
				// wrapper
				if (aObject._Params != null && aObject._Result != null)
				{
					output += `<div class="template" data-template-id="${aObject._Params._TemplateID}" data-template-tags="${aObject._Params._TemplateTags}" data-template-renderer="${aObject._Params._TemplateRenderer}">`
					output += this.Render(aObject._Result);
					output += '</div>';
				}
				else
				{
					for (var property in aObject)
					{
						var prop_value = aObject[property];
						var prop_type = typeof(aObject[property]);
						if (Array.isArray(prop_value))
						{
							prop_type = "array";
						}

						output += `<div class="property" data-key="${property}" data-type="${prop_type}">`;
						switch (prop_type)
						{
							case "array":
							{
								for (var i = 0; i < prop_value.length; i++)
								{
									output += `<div class="arrayitem" data-index="${i}">`;
									output += this.Render(prop_value[i]); // item value
									output += '</div>';
								}
							}
							break;

							case "object":
							{
								output += this.Render(prop_value);
							}
							break;

							default:
							{
								output += `<div class="value">`;
								output += prop_value;
								output += '</div>';
								
							}
							break;
						}
						output += '</div>';
					}
				}
				output += '</div>';
			}
			break;

			// string
			// number
			default:
			{
				output += `<div class="value" data-type="${obj_type}">`;
				output += aObject;
				output += '</div>';
			}
			break;
		}

		return output;
	},

	ExecuteRenderers : function()
	{
		console.log("executing renderers!");
		this.renderers.forEach(function(item, index){
			item();
		});
	},

	// safely try get a parameter, and set it if it does not already exist
	GetParam : function(aParams, aTerm, aDefault)
	{
		var temp = "";
		if (aTerm in aParams)
		{
			temp = aParams[aTerm];
		}
		else
		{
			if (aDefault != null)
			{
				temp = aDefault;
				aParams.aTerm = aDefault;
			}
		}
		return temp;
	},
}