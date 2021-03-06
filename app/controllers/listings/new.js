import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),

  actions: {
    save(listing){
      let formattedTime = listing.get('pickupTime')._d;
      listing.set('pickupTime', formattedTime);
      listing.save().then(()=>{
        this.transitionToRoute('listings');
      });
    },
    cancel(){
      this.transitionToRoute('listings')
    }
  }
});
