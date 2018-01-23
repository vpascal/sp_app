var editableList = Sortable.create(editable, {
  group: 'shared',
  animation: 100,
  filter: '.js-remove',
  onFilter: function (evt) {
    var el = editableList.closest(evt.item);
    el && el.parentNode.removeChild(el);
  }
});

function myFunction(){

    Ply.dialog('prompt', {
      title: 'Add',
      form: { name: 'Category' }
    }).done(function (ui) {
      var el = document.createElement('li');
      el.innerHTML = ui.data.name + '<i class="js-remove">✖</i>';
      editableList.el.appendChild(el);
    });
  }; 


var counter = 4;

function bucket() {
    
    var div = document.createElement('div');
    div.setAttribute('class', "w3-container w3-quarter");
    var localcounter = counter+1;
    div.innerHTML="<h2>Bucket "+localcounter+"</h2><ul class='highlight w3-ul w3-border w3-hoverable w3-card-2' id=qux"+counter+"><li></li></ul><span onclick='this.parentElement.style.display=\x22none\x22' class='w3-button'>&times;</span>";
    var x = 'qux'+ counter;
    counter++;
    document.getElementById("secondrow").appendChild(div);
   //console.log(x);
    Sortable.create(document.getElementById(x),{
      group:'shared',
      animation: 100
    });

     
};

function reset(id) {
    var node = document.getElementById(id).childNodes;
    //var node = document.getElementById("qux");
    var list = document.getElementById("editable");
    for (var i = 1; i < node.length; i++) {
    list.insertBefore(node[i], list.childNodes[0]);
  }
};


Sortable.create(qux, {
  group: 'shared',
  animation: 100
});

Sortable.create(qux1, {
  group: 'shared',
  animation: 100
});

Sortable.create(qux2, {
  group: 'shared',
  animation: 100
});

Sortable.create(qux3, {
  group: 'shared',
  animation: 100
});


d3.csv("data.csv", function(data) {
  d3.select('#editable')
  .selectAll('.vlad')
  .data(data)
  .enter()
  .append("li")
  .html(function(d,i) { return d.comment + "&nbsp" + "<span class='w3-badge w3-green'>" + d.frequency + "</span>";})
  .append('i')
  .attr('class', 'js-remove')
  .text('✖'); 
});

