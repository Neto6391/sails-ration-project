module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function () {

    // const things = [
    //   { id: 1, label: 'Sweet Red Drill' },
    //   { id: 2, label: 'Red Mountain Bike' }
    // ];

    //TODO: come back to this and only fetch things that the current is allowed to see
    const things = await Thing.find();

    // Respond with view.
    return {
      things
    };

  }


};
