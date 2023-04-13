let nums = [2, 7, 18, 15, 45, 3, 63, 6], target = 9;

let add, sub;

let a1 = [];

for (i = 0; i < nums.length; i++) {

    for (j = i + 1; j < nums.length; j++) {

        add = nums[i] + nums[j];

        sub = nums[i] - nums[j];

        if (target == add || target == sub) {

            console.log(i, j)

        }

    }

}



let a = [
    {
        name: "manoj",
        group: [{
            name: "venkat"
        },
        {
            name: "mouli"
        }, {
            name: "sai",
            group: [{
                name: "Hello"
            }, {
                name: "Hello1"
            }]
        }]
    }
]
let array2 = []

function Recurs(obj) {
    // console.log(obj)
    for (let val in obj) {
        // console.log(obj[val])
        let value = obj[val]
        if (typeof value === "object") {
            Recurs(value)
        }

        else if (value.includes("o")) {
            // console.log(value)
            array2.push(value.replace("o", ""))
        }
        else if (value.includes("t")) {
            // console.log(value)
            array2.push(value.replace("t", ""))
        }
    }
    // console.log(obj.name)

}
Recurs(a)
console.log(array2)

