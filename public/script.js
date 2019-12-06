
// Add your javascript here
$(function(){
    $("h1").animate({
      "margin-left": "100px"
    }, "slow");
    
  
  $('#taskBtn').click(function() {//onclick submit button trigger the sentences 
    
      var newTask = $('#taskInputText').val();//asigns value of the input text to variable newTask
  
      if(newTask !== '') {//checks if the value of the input for the new task is no empty
        
          var count = $("#taskListSection").children().length;//a simple counter
          
          $('#taskListSection').append('<li id=row'+count+' class="list-group-item  bg-success"><input id=check'+count+' type="checkbox">&nbsp;&nbsp;&nbsp;&nbsp;'+ count + '. '+ newTask +'</li>'
          //new task is created
          
          );
          //$('#check'+count).addClass('custom-control-input');
          $('#taskInputText').val('');//sets empty te input text or text area
         
          
          checkboxEffect(count);
          deleteTasks(count);//delete tasks on click removes buttons a task row
          viewTasks(count);//view tasks on click view buttons

          setTimeout(function(){
            $('#taskListSection li.bg-success').removeClass('bg-success');
          },1000); 
        
                          } else {
                              alert('Come on, you\'re better than that');   
                          }
                      });  
                      });

    function deleteTasks(count){
     $('#removeBtn').click(function(){
     if($('#check'+count).prop("checked") == true){
      $('#check'+count).remove();
      $('#row'+count).remove();}
        });
      $('#removeallBtn').click(function(){
      $('#check'+count).remove();
      $('#row'+count).remove();
        });
            }

    function viewTasks(count){
     $('#completedBtn').click(function(){
     if($('#check'+count).prop("checked") == false){
     // $('#check'+count).hide();
      $('#row'+count).hide();
    }
      else
      {
      //$('#check'+count).show();
      $('#row'+count).show();
      }
        });
     $('#activeBtn').click(function(){
     if($('#check'+count).prop("checked") == true){
     // $('#check'+count).hide();
      $('#row'+count).hide();
    }
      else
      {
    //  $('#check'+count).show();
      $('#row'+count).show();
      }
        }); 

     $('#allBtn').click(function(){
     // $('#check'+count).show(); comented an all function view buttons function cause it causes fadeToggle to fails
      $('#row'+count).show();
        });
                                        }
   function checkboxEffect(count){//this makes the effect of appear an disapppear of a checkbox
                                  //depending on if is already checked 
  $("#row"+count).on('mouseenter mouseleave',function() {
    if ($("#check"+count).prop('checked')==false) {
            $("#check"+count).fadeToggle('slow');
           
          }
          
        }); }
       