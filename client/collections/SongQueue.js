// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({



  initialize: function(){

  },

  playFirst: function(song){
    // console.log('song',song);
    this.models[0].play();
  },

  playNext: function(){

  },

  enqueue: function(song){
    this.add(song);
    this.render();
  },

  dequeue: function(song){
    this.remove(song);
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