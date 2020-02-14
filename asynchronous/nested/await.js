//
// this examples shows how to wait for one step to complete before going into a second step
//

async function step1() {
   // REPLACE with an actual async function
   let result = await timeout(2000, 'step 1');
   console.log(result);
}

async function step2() {
   // REPLACE with an actual async command
   let result = await timeout(1000, 'step 2');
   console.log(result);
}

function timeout(ms, step) {
   return new Promise((resolve) => {
      console.log(`${step} starting`);
      setTimeout(() => {
         resolve(`${step} completed`);
      }, ms);
   });
}

// Call the function in order
(async () => {
   try {
      await step1();
      await step2();
      console.log('finished');
   }
   catch (err) {
      console.log('pb occured');
   }
})();

// Invokes the steps simultaneously
/*
Promise.all([step1(), step2()])
   .then(() => {
      console.log('finished');
   });
*/

// Invokes the steps without caring of their execution to complete
/*
step1();
step2();
console.log('finished');
console.log('...wait, that\'s not true');
*/




