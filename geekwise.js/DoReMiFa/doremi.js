/*
The keys I will use
Escape F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 
Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace 
Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash 
Capslock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter 
ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ShiftRight 
ArrowUp 
ArrowLeft ArrowDown ArrowRight 
Insert Home PageUp 
Delete End PageDown 
*/


//polysynth.js
/*class PolySynth extends Tone.PolySynth{
  startNote(Value){super.triggerAttack(Value)}
  stopNote(Value){super.triggerRelease(Value)}
}
mySynth=new Tone.PolySynth (polyphony=20)
//end polysynth.js*/


//grid.js
class Grid{
  constructor(){this.rows={};this.cols={};}
  //Pay attention to the plural and singular
  addRow(Key,Values){
    if(!this.rows[Key]){
      this.makeRow(Key);
      for(const value of Values) this.rows[Key][value]={};
    }
    else for(const value of Values) this.rows[Key][value]={};
    for(const value of Values){
      if(!this.cols[value]) this.makeCol(value);
      this.cols[value][Key]={}
    }
  }
  addCol(Keys,Value){
    if(!this.cols[value]){
      this.makeCol(Value);
      for(key of Keys) this.cols[value][key]={};
    }
    else for(key of Keys) this.cols[value][key]={};
    for(key in Keys){
      if(!this.rows[key]) this.rows[key]={};
      this.rows[key][value]={}
    }
  }
  addCrd(Key,Value){
    if(!this.rows[key]) this.rows[key]={};
    this.rows[key][value]={}
    if(!this.cols[value]) this.cols[value]={};
    this.cols[value][key]={}
  }
  subRow(Key,Values){
    if(!Values) Values=Object.keys(this.rows[Key]);
    for(const value of Values){
      if(this.cols[value][Key]) delete this.cols[value][Key];
      if(Object.keys(this.cols[value]).length===0) this.delCol(value);
    }
    if(this.rows[Key]) this.delRow(Key);
  }
  subCol(Keys,Value){
    if(!Keys) Keys=Object.keys(this.cols[Value]);
    for(const key in Keys){
      if(this.rows[key][Value]) delete this.rows[key][Value];
      if(Object.keys(this.rows[key]).length===0) this.delRow(Key);
    }
    if(this.cols[Value]) this.delCol(Value);
  }
  makeRow(Key){this.rows[Key]={};}
  makeCol(Value){this.cols[Value]={};}
  delRow(Key){delete this.rows[Key];}
  delCol(Value){delete this.cols[Value];}
}
class NoteGrid extends Grid{
  constructor(synth){super();this.synth=synth}
  makeCol(Value){super.makeCol(Value);this.synth.noteOn(Value)}
  delCol(Value){super.delCol(Value);this.synth.noteOff(Value)}
}//end grid.js

function num2note(num){
  let octave=Math.floor(num/12)-1;
  let note=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'][num%12];
  return note+String(octave);
}
function noteOn(note){synth.triggerAttack(note);}
function noteOff(note){synth.triggerRelease();}

function easyKey(rawchar){
  rawchar=rawchar.toLowerCase();
  lookup={"escape":"Escape","esc":"Escape","f1":"F1","f2":"F2","f3":"F3","f4":"F4","f5":"F5","f6":"F6","f7":"F7","f8":"F8","f9":"F9","f10":"F10","f11":"F11","f12":"F12","`":"Backquote","1":"Digit1","2":"Digit2","3":"Digit3","4":"Digit4","5":"Digit5","6":"Digit6","7":"Digit7","8":"Digit8","9":"Digit9","0":"Digit0","-":"Minus","=":"Equal","backspace":"Backspace","tab":"Tab","q":"KeyQ","w":"KeyW","e":"KeyE","r":"KeyR","t":"KeyT","y":"KeyY","u":"KeyU","i":"KeyI","o":"KeyO","p":"KeyP","[":"BracketLeft","]":"BracketRight","\\":"Backslash","capslock":"Capslock","a":"KeyA","s":"KeyS","d":"KeyD","f":"KeyF","g":"KeyG","h":"KeyH","j":"KeyJ","k":"KeyK","l":"KeyL",";":"Semicolon","'":"Quote","enter":"Enter","shiftleft":"ShiftLeft","shiftright":"ShiftRight","leftshift":"ShiftLeft","rightshift":"ShiftRight","z":"KeyZ","x":"KeyX","c":"KeyC","v":"KeyV","b":"KeyB","n":"KeyN","m":"KeyM",",":"Comma",".":"Period","/":"Slash","arrowup":"ArrowUp","arrowleft":"ArrowLeft","arrowdown":"ArrowDown","arrowright":"ArrowRight","uparrow":"ArrowUp","leftarrow":"ArrowLeft","downarrow":"ArrowDown","rightarrow":"ArrowRight","up":"ArrowUp","left":"ArrowLeft","down":"ArrowDown","right":"ArrowRight","insert":"Insert","home":"Home","pageup":"PageUp","delete":"Delete","end":"End","pagedown":"PageDown",};
  let convert=lookup[rawchar];
  return convert||rawchar;
}
function easyCommand(longdesc){
  if (Number(longdesc))
    return longdesc;
  return{'shiftdownsemitone':'SDS','shiftupsemitone':'SUS','shiftdownoctave':'SDO','shiftupoctave':'SUO','benddown':'BDS','bendup':'BUS','benddownsemitone':'BDS','bendupsemitone':'BUS','benddownoctave':'BDO','bendupoctave':'BUO','downchannel':'DC','upchannel':'UC','downmap':'DM','upmap':'UM','downscale':'DS','upscale':'US',}[longdesc];
}





KILLLLLLLLLLLLLLLLMEEEEEEEEE=1;
down={"Escape":0,"F1":0,"F2":0,"F3":0,"F4":0,"F5":0,"F6":0,"F7":0,"F8":0,"F9":0,"F10":0,"F11":0,"F12":0,"Backquote":0,"Digit1":0,"Digit2":0,"Digit3":0,"Digit4":0,"Digit5":0,"Digit6":0,"Digit7":0,"Digit8":0,"Digit9":0,"Digit0":0,"Minus":0,"Equal":0,"Backspace":0,"Tab":0,"KeyQ":0,"KeyW":0,"KeyE":0,"KeyR":0,"KeyT":0,"KeyY":0,"KeyU":0,"KeyI":0,"KeyO":0,"KeyP":0,"BracketLeft":0,"BracketRight":0,"Backslash":0,"Capslock":0,"KeyA":0,"KeyS":0,"KeyD":0,"KeyF":0,"KeyG":0,"KeyH":0,"KeyJ":0,"KeyK":0,"KeyL":0,"Semicolon":0,"Quote":0,"Enter":0,"ShiftLeft":0,"KeyZ":0,"KeyX":0,"KeyC":0,"KeyV":0,"KeyB":0,"KeyN":0,"KeyM":0,"Comma":0,"Period":0,"Slash":0,"ShiftRight":0,"ArrowUp":0,"ArrowLeft":0,"ArrowDown":0,"ArrowRight":0,"Insert":0,"Home":0,"PageUp":0,"Delete":0,"End":0,"PageDown":0}





allCommands=['shiftdownsemitone','shiftupsemitone','shiftdownoctave','shiftupoctave','benddownsemitone','bendupsemitone','benddownoctave','bendupoctave','downchannel','upchannel','downmap','upmap','downscale','upscale']
//let usermap={
/*  'z':36,'a':38,'q':40,'1':41,
  'x':43,'s':45,'w':47,'2':48,
  'c':48,'d':50,'e':52,'3':53,
  'v':55,'f':57,'r':59,'4':60,
  'b':60,'g':62,'t':64,'5':65,
  'n':67,'h':69,'y':71,'6':72,
  'F1':'shiftdownsemitone',   'F2':'shiftupsemitone',
  'F3':'shiftdownoctave',     'F4':'shiftupoctave',
  'F5':'benddownsemitone',    'F6':'bendupsemitone',
  'F7':'benddownoctave',      'F8':'bendupoctave',
  'F9':'downchannel',         'F10':'upchannel',
  'F11':'previousmap',        'F12':'nextmap',
};*/
const usermap=`
z 36:a 38:q 40:1 41
x 43:s 45:w 47:2 48
c 48:d 50:e 52:3 53
v 55:f 57:r 59:4 60
b 60:g 62:t 64:5 65
n 67:h 69:y 71:6 72
F1 shiftdownsemitone
F2 shiftupsemitone
F3 shiftdownoctave
F4 shiftupoctave
F5 benddownsemitone
F6 bendupsemitone
F7 benddownoctave
F8 bendupoctave
F9 downchannel
F10 upchannel
F11 previousmap
F12 nextmap
`
function processMap(usermap){
  map={}
  for(const parts of usermap.split(new RegExp(':|\n'))){
    if(parts)
      for(let i=0,splits=parts.split(' ');i<splits.length;i++){
        if(i==0) map[easyKey(splits[i])]=[]
        else map[easyKey(splits[0])].push(easyCommand(splits[i]))
      }
  }
  return map;
}
map=processMap(usermap);
//let map={}
//for (let item in usermap){
//  map[easyKey(item)]=easyCommand(usermap[item]);
//}//WW!
function runcommand(comm){
  switch(comm) {
    case "0":
    break;case"SDS": transpose--;
    break;case"SUS": transpose++;
    break;case"SDO": transpose-=12;
    break;case"SUO": transpose+=12;
    break;case"BDS": transpose--;
    break;case"BUS": transpose++;
    break;case"BDO": transpose-=12;
    break;case"BUO": transpose+=12;
    break;case"DC":  channel=Math.max(0, channel-1);
    break;case"UC":  channel=Math.min(16,channel+1);
    break;case"DM":  map--;
    break;case"UP":  map++;
    break;case"DS":  transpose=-5;
    break;case"US":  transpose=0;
    break;default:              
  }
}
function runOffCommand(comm){
  switch(comm) {
    case "0":
    break;case"BDS": transpose++;
    break;case"BUS": transpose--;
    break;case"BDO": transpose+=12;
    break;case"BUO": transpose-=12;
    break;default:              
  }
}


PLEASEJUSTLETMEDIEALREADYMERCY=0
var synth = new Tone.Synth().toMaster();



let transpose=0;
//octave=0; --> uhse transpose instead
noteMatrix=new NoteGrid();
function eventHandler(event){
  event.preventDefault();
  if(event.type==="keydown"){
    if (!!(comm=map[event.code])){
      console.log(comm);
      noteMatrix.addRow(event.code,comm)
    }
  ////if (!!(comm=map[event.code])&&!down[event.code]){
  ////  down[event.code]=comm;
  ////  if (Number(comm)){
  ////    shiftNote=Number(comm)+transpose;
  ////    down[event.code]=shiftNote;
  ////    noteOn(num2note(shiftNote));
  ////  }else{
  ////    //noteOn(100);//setTimeout(noteOff(100),100);
  ////    runcommand(comm);
  ////  }
  }
  if(event.type==="keyup"){
    for(let button in map){
      if(event.code===easyKey(button)){
        let comm=down[easyKey(button)];
        if (Number(comm)){
          noteOff(num2note(comm));
        }else{
          runOffCommand(comm);
        }
        down[easyKey(button)]=false;
      }
    }
  }
}
document.addEventListener('keydown',event=>eventHandler(event));
document.addEventListener('keyup',event=>eventHandler(event));