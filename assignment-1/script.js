class Utils {
  // All Validation functions.

  isNull = (value) => value === null;
  isUndefined = (value) => value === undefined
  isNumber = (value) => typeof value == 'number'; //
  isString = (value) => typeof value == 'string';
  isBoolean = (value) => value === true || value === false;
  isObject = (value) => value !== null && typeof(value) === 'object';
  isArray = (value) => Array.isArray(value);
  isTruthy = (value) => !!value;
  isFalsy = (value) => !value;
  isFunction = (value) => typeof value === "function";
  keys = (value) => Object.keys(value);
  values = (value) => Object.values(value);
  size = (value) => value.length;
}

// API call.
async function fetchDefinition() {
  const API = "https://raw.githubusercontent.com/karthik-hr/js-utils/master/definition.json";
  
  const apiResponse = await fetch(`${API}`);
  const resData = await apiResponse.json();

  return resData;
}

function findStats(definition) {
  const instance = new Utils();

  let stats = {
    numberOfItems: instance.size(definition.data),
    null: 0,
    undefined: 0,
    numbers: 0,
    strings: 0,
    boolean: 0,
    objects: 0,
    array: 0,
    truthy: 0,
    falsy: 0,
  };

  // Converting all the values of the key's inside an object into an array.
  let allValues = definition.data.map((element) => {
    return instance.values(element);
  });

  // This is an array with all the key's value in the response data. Had an array of arrays before, converted that into a single array.
  allValues = allValues.flat();
  
  //Iterating through all the values & performing validation.
  allValues.forEach((item) => {
    if(instance.isNull(item)){
      stats.null++;
    } else if(instance.isUndefined(item)) {
      stats.undefined++;
    } else if(instance.isNumber(item)) {
      stats.numbers++;
    } else if(instance.isString(item)) {
      stats.strings++;
    } else if(instance.isBoolean(item)) {
      stats.boolean++;
    } else if(instance.isArray(item)) {
      stats.array++;
    }  

    //Separate Object counter because Array is an Object as well.
    if(instance.isObject(item)) {
      stats.objects++;
    } 
    
    if(instance.isTruthy(item)) {
      stats.truthy++;
    } 
    if(instance.isFalsy(item)) {
      stats.falsy++;
    }
  })

  return stats;
}

// Render Function
function render(stats) {
  const items = Object.keys(stats);
  const ul = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `${item}: ${stats[item]}`;
    ul.appendChild(li);
  }
  const root = document.getElementById("stats");
  if (root) {
    root.innerHTML = "";
    root.append(ul);
  }
}

// Main Function
async function main() {
  const definition = await fetchDefinition();

  const stats = findStats(definition);
  render(stats);
}

main();
