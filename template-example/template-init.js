// don't worry, this file will not be part of the generated code :)

// called before template is parsed
// variables added to context here can be used within the template
export async function before(context) {
  context.directoryName = 'SetByBeforeFunction';
};

// called after template is parsed
// postRunActions can be added to the postRunActions array
// these are executed after user accepts the new diff
export async function after(context) {
  context.postRunActions.push(() => console.log("I'm all done, thanks for waiting!"));
  //you can also call scaffander() function here if you want to generate a template within another template 
};
