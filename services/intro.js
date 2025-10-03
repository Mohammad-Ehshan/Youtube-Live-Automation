
const team = {
  ehshan : "The host with the most. Where there's a hackathon, he's already won it. Network is net worth, and this guy's net is huge.",
  anikesh : "You can't out-code him, out-think him, or out-nerd him. The brain behind every build, the engine behind every project",
  raj : "The spark of a hacker, building what others can't even imagine. Always one code away from something insane.",
  swayam : "You won't see him, but he sees everything. Security is his playground. our team's Shadow Guardian.",
  aarwin : "One day in India, the next in Japan. He's jet-setting and bug-squashing at light speed. If there's an issue, he's already fixed it… probably from a different time zone.",
  koshal : "He makes us look as good as we code. From edits to marketing magic, he's the lens through which the world sees us."
};


export function getIntro(name) {
  name = name.toLowerCase();
  return team[name];
  // return team[name] || "I don`t have info about that team member.";
}
