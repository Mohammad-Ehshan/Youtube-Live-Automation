
const team = {
  ehshan : "hi i am ehshan",
  anikesh : "hi am anikesh",
  raj : "This is raj aka Aryan",
  swayam : "Mein hu Swayam",
  aarwin : "i am N. Aarwin"
};


export function getIntro(name) {
  name = name.toLowerCase();
  return team[name];
  // return team[name] || "I don`t have info about that team member.";
}
