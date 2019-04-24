require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ca7730c638fc1d151211f5e').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count
};

deleteTaskAndCount('5ca7730c638fc1d151211f5f').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});