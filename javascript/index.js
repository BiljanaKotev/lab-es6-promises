// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
const potatoesImg = document.getElementById("mashedPotatoesImg");
potatoesImg.style.display = "block";

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;

          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed Potatoes are ready</li>`;
        });
      });
    });
  });
});

// // Iteration 2 - using promises
const steakImg = document.getElementById("steakImg");
steakImg.style.display = "block";

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return `${steak[1]}`;
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return `${steak[2]}`;
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return `${steak[3]}`;
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return `${steak[4]}`;
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return `${steak[5]}`;
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return `${steak[6]}`;
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return `${steak[7]}`;
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return `${steak[8]}`;
  })
  .catch((error) => console.log(error));
// ... Your code here

// // Iteration 3 using async/await
async function makeBroccoli() {
  const container = document.querySelector("#broccoli");

  const step0 = await obtainInstruction("broccoli", 0);
  container.innerHTML += `<li>${step0}</li>`;

  const step1 = await obtainInstruction("broccoli", 1);
  container.innerHTML += `<li>${step1}</li>`;

  const step2 = await obtainInstruction("broccoli", 2);
  container.innerHTML += `<li>${step2}</li>`;

  const step3 = await obtainInstruction("broccoli", 3);
  container.innerHTML += `<li>${step3}</li>`;

  const step4 = await obtainInstruction("broccoli", 4);
  container.innerHTML += `<li>${step4}</li>`;

  const step5 = await obtainInstruction("broccoli", 5);
  container.innerHTML += `<li>${step5}</li>`;

  const step6 = await obtainInstruction("broccoli", 6);
  container.innerHTML += `<li>${step6}</li>`;

  const step7 = "Broccoli is ready!";
  container.innerHTML += `<li>${step7}</li>`;

  const broccoliImage = document.querySelector("#broccoliImg");
  broccoliImage.removeAttribute("hidden");
}

makeBroccoli().catch((error) => {
  console.log(error);
});

// // ...

// // Bonus 2 - Promise all
const brusselsSproutsImg = document.getElementById("brusselsSproutsImg");
brusselsSproutsImg.style.display = "block";

const container = document.querySelector("#brusselsSprouts");

const promises = brusselsSprouts.map((step, index) => {
  return obtainInstruction("brusselsSprouts", index);
});

Promise.all(promises)
  .then((results) => {
    results.forEach((instruction) => {
      container.innerHTML += `<li>${instruction}</li>`;
    });
    container.innerHTML += "<li>Brussels sprouts are ready!</li>";
  })
  .catch((error) => {
    console.log(error);
  });
// // ...
