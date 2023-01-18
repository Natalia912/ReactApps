// import Arcade from "../../assets/images/icon-arcade.svg"
// import Advanced from "../../assets/images/icon-advanced.svg"
// import Pro from "../../assets/images/icon-pro.svg"

const data = {
  plans: [
    {
      name: "Arcade",
      img: "./icon-arcade.svg",
      monthlyPrice: 9,
      yearlyPrice: 90
    },
    {
      name: "Advanced",
      img: "./icon-advanced.svg",
      monthlyPrice: 12,
      yearlyPrice: 120
    },
    {
      name: "Pro",
      img: "./icon-pro.svg",
      monthlyPrice: 15,
      yearlyPrice: 150
    }
  ],
  addOns: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20
    }
  ]
}

export default data;