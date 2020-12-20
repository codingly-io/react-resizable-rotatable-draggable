function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type = "mousemove"; break;        
        case "touchend":   type = "mouseup";   break;
        default:           return;
    }

    const ev = new MouseEvent(type, {
      ...event,
      bubbles: true,
      // cancelable: true,
      // view: window,
      // detail: 1,
      screenX: first.screenX,
      screenY: first.screenY,
      clientX: first.clientX,
      clientY: first.clientY,
      // ctrlKey: false,
      // altKey: false,
      // shiftKey: false,
      // metaKey: false,
      // button: 0,
      // relatedTarget: null
    });

    first.target.dispatchEvent(ev);
    event.preventDefault();
}

export function mapTouchToMouse(elem) 
{
    elem.addEventListener("touchstart", touchHandler, true);
    elem.addEventListener("touchmove", touchHandler, true);
    elem.addEventListener("touchend", touchHandler, true);
    elem.addEventListener("touchcancel", touchHandler, true);    
}