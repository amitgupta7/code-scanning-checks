// Checks API example
// See: https://developer.github.com/v3/checks/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  //app.on(["check_suite.requested", "check_run.rerequested"], check);
  app.on("check_run.completed", completed);

  async function completed(context){
    //print out the check_run.completed event
    console.log(context.payload);
  }

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
