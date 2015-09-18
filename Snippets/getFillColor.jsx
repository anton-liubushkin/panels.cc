/**
 * Return array of RGB values for active SOLIDFILL layer
 * @returns {object} Array of RGB values, like [0, 100, 255]
 */
function getFillColor() {  
    var ref = new ActionReference();  
    ref.putEnumerated(stringIDToTypeID("contentLayer"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));  
    var color = executeActionGet(ref).getList(charIDToTypeID("Adjs")).getObjectValue(0).getObjectValue(charIDToTypeID('Clr '));  
    return [color.getDouble(charIDToTypeID('Rd  ')), color.getDouble(charIDToTypeID('Grn ')), color.getDouble(charIDToTypeID('Bl  '))];  
}