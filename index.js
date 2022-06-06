
function food(Chicken,Paneer,Mashroom,Masala,Dosa){
    this.Chicken=Chicken;
    this.Paneer=Paneer;
    this.Mashroom=Mashroom;
    this.Masala=Masala;
    this.Dosa=Dosa;


}

function OrderFood(event){
  event.preventDefault();
  let form=document.getElementById("list");
  let Chicken=form.Chicken.value;
  let Paneer=form.Paneer.type;
  let Mashroom=form.Mashroom.type;
  let Masala=form.Masala.value;
  let Dosa=form.Dosa.type;
  

  let S1=new food(Chicken,Paneer,Mashroom,Masala,Dosa);

  console.log(S1)

}