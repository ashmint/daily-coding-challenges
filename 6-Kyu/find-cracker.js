/* 6kyu - Find Cracker.

Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]],
["name2", 140, ["B", "A", "A", "A"]],
["name3", 200, ["B", "A", "A", "C"]]
];
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
];

return ["name1", "name3"];

*/


//SOLUTION 


function findHack(arr) {
    let hacked = [];
    let tempScore = 0;
    let mapArray = []
    const elementsToCheck = ['C', 'D', 'E', 'F', 'G', 'H'];
    console.log(arr)
    for (let name of arr) {

        mapArray = name[2].map(x => {
            return x == 'A' ? 30 : x == 'B' ? 20 : x == 'C' ? 10 : x == 'D' ? 5 : 0
        });

        tempScore = mapArray.reduce((acc, x) => acc + x, 0)

        if (!name[2].some(item => elementsToCheck.includes(item)) && name[2].length >= 5) {
            tempScore += 20;
        }


        if (name[1] > 200 || tempScore < name[1]) {
            hacked.push(name[0])
            console.log('hacked', name, tempScore)
        }
        else {
            console.log('not hacked', name, tempScore)
        }
        tempScore = 0;
    }
    return hacked;
}