function myfunction(){
   let sample = document.getElementById('problem').value;
   let list = document.createElement('li');
   let para= document.createTextNode(sample);
   list.appendChild(para);
   console.log(list);
   let btn = document.createElement('BUTTON');
   let btn1 = document.createTextNode('X');
   btn.className='buttonx';
   btn.appendChild(btn1);
   console.log(btn);
   list.appendChild(btn);
   console.log(list);
   document.getElementById('total').appendChild(list);
   btn.onclick = function(){
      btn.parentNode.remove();
   }
}
