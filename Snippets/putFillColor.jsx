/**
 * Set RGB color for active SOLIDFILL layer
 * @param {number} _r Red color value of 0–255
 * @param {number} _g Green color value of 0–255
 * @param {number} _b Blue color value of 0–255
 */
function putFillColor(_r, _g, _b) {  
    var desc1 = new ActionDescriptor(),  
        desc2 = new ActionDescriptor(),  
        desc3 = new ActionDescriptor(),  
        ref1 = new ActionReference();  
    ref1.putEnumerated(stringIDToTypeID("contentLayer"), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));  
    desc1.putReference(charIDToTypeID('null'), ref1);  
    desc3.putDouble(charIDToTypeID('Rd  '), _r);  
    desc3.putDouble(charIDToTypeID('Grn '), _g);  
    desc3.putDouble(charIDToTypeID('Bl  '), _b);  
    desc2.putObject(charIDToTypeID('Clr '), stringIDToTypeID("RGBColor"), desc3);  
    desc1.putObject(charIDToTypeID('T   '), stringIDToTypeID("solidColorLayer"), desc2);  
    executeAction(charIDToTypeID('setd'), desc1, DialogModes.NO);  
}