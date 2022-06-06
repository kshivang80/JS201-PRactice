document.querySelector('audio').play();

// creating throttle function to improve ui and reduce api calls;
let time;

let id;
function throttle(main,delay){
//     let last;
//    let date = new Date().getTime();
//    if(time===undefined || date-time>delay){
//        main();
//        time = date;
//    }

//    else {
//        last = throttle.bind(main,delay);
//        time = date;
//        id = setTimeout(()=>{
//          if(last===undefined){
//              return;
//          }
//          else {
//             last();
//          }
//        },delay)
//        console.log(time,last)
//    } 
let date = new Date().getTime();
if(time===undefined || date-time>delay){ 
main();
time = date;
}
else {
    if(id) clearTimeout(id);
 id = setTimeout(()=>{
   throttle(main,1000);
  
 },delay-date-time);
}
}

// async function for fetching data..
async function main(){
   let input = document.querySelector('input').value;

   if(input==='') {
    document.querySelector('#characters').style.display='none';
    document.querySelector('#searchBox').style.borderRadius='20px';
   }
   else {
   const url = `https://swapi.dev/api/people/?search=${input}`;

   const res = await fetch(url);

   const data = await res.json();

   console.log(data);
   appendData(data);
   }
}

// function for characters data below search box;
function appendData(data){
    if(data.results.length===0) {
        document.querySelector('#characters').innerHTML = '';
        let noRe = document.createElement('p');
        noRe.innerText = 'No Results Found 🙃'
        document.querySelector('#characters').append(noRe);
    }
    else {
    document.querySelector('#characters').innerHTML = '';
    document.querySelector('#characters').style.display='block';
    document.querySelector('#searchBox').style.borderRadius='20px 20px 0px 0px';
    data.results.forEach(function(el){

        let box = document.createElement('div');
        
        let name = document.createElement('p');
        name.innerText = el.name;

        let dob = document.createElement('p');
        dob.innerText = el.birth_year;

        let gender = document.createElement('p');
        gender.innerText = el.gender;

        name.append(gender);
        box.append(name,dob);
        document.querySelector('#characters').append(box);

        box.addEventListener('click',function(){
            showCharacterData(el);
        })
    })
}
}


// function for showing details of particular character
function showCharacterData(data) {
    let main = document.querySelector('#main');
    document.querySelector('#logo').style.display='none';
    document.querySelector('#searchBox').style.display='none';
    document.querySelector('#characters').style.display='none';

    let box = document.createElement('div');
    box.setAttribute('id','char');

    let titleBox = document.createElement('div');
    let title = document.createElement('p');
    title.innerText = data.name;
    titleBox.append(title);

    let detailsBox = document.createElement('div');
    let personal = document.createElement('div');

    let info = document.createElement('p');
    info.innerText = 'Personal Info';

    let dob = document.createElement('p');
    dob.innerText ='Birth Year : ' + data.birth_year;

    let gender = document.createElement('p');
    gender.innerText = 'Gender : '+data.gender;

    let height = document.createElement('p');
    height.innerText = 'Height : '+data.height;

    personal.append(info,dob,gender,height)

    let anatomy = document.createElement('div');

    let info2 = document.createElement('p');
    info2.innerText = 'Anatomy';

    let eye = document.createElement('p');
    eye.innerText = 'Eye Color : '+data.eye_color;

    let mass = document.createElement('p');
    mass.innerText = 'Mass : '+data.mass;

    let hair = document.createElement('p');
    hair.innerText = 'Hair Color : '+data.hair_color;

    anatomy.append(info2,eye,mass,hair)
    detailsBox.append(personal,anatomy);

    let btnBox = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerText = 'Go Back';

    btn.addEventListener('click',function(){
        let main = document.querySelector('#main');
        main.removeChild(main.lastElementChild);
        document.querySelector('#logo').style.display='flex';
        document.querySelector('#searchBox').style.display='block'  
        document.querySelector('input').value = '';
        document.querySelector('#searchBox').style.borderRadius='20px 20px';     
    })
    btnBox.append(btn);

    box.append(titleBox,detailsBox,btnBox);

    console.log(box);

    document.querySelector('#main').append(box);
}


// function for toggling mute state of audio;
function toggleMute(){
    let audio = document.querySelector('audio');
    let img1 = document.querySelector('#container>img:nth-child(1)');
    let img2 = document.querySelector('#container>img:nth-child(2)');
    if(audio.muted){
       img1.style.display="none";
       img2.style.display='block';
       audio.muted=false;
       document.querySelector('audio').play();
    //    if(audio)
    }
    else {
        img1.style.display="block";
        img2.style.display='none';
        audio.muted=true;
    }
}

