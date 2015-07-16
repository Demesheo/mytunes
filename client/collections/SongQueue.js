// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({



  initialize: function(){
    _.bindAll(this, "enqueue", "dequeue", "playNext"); 
    // console.log("before this", this);
    // console.log(window.Backbone.Events)
    this.bind("ended", this.playNext);
    this.bind("enqueue", this.enqueue);
    this.bind("dequeue", this.dequeue);
    // console.log("after this",this)
  },

  playFirst: function(song){
    // console.log("SongQueue");
    this.models[0].play();
  },

  playNext: function(){
    this.remove(this.models[0]);
    if(this.length>0){
      this.playFirst();
    }
  },

  enqueue: function(song){
    this.add(song);
    if(this.length === 0){
      this.playFirst();
    }
  },

    dequeue: function(song){
      this.remove(song);
      if(this.length>0){
        this.playFirst();
      }
    }

  // render: function(){
  //   // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
  //   // see http://api.jquery.com/detach/
  //   this.$el.children().detach();

  //   this.$el.html('<th>Song Queue</th>').append(
  //     this.collection.map(function(song){
  //       return new SongQueueEntryView({model: song}).render();
  //     })
  //   );
  // }


});