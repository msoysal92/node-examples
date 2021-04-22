
/*console.log('Before');
getUser(1, function(user) {
    //Get the repositories
    getRepositories(user.githubUserName, (repos) => {
        console.log('Repos : ', repos)
    })
});

console.log('After');*/

// getUser(1)
//     .then(user => getRepositories(user.githubUserName))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err));

//Async and Await approach

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.githubUserName);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }catch (e) {
        console.log("Error : ", e);
    }

};

displayCommits();


function getUser(id) {
    return new Promise(((resolve, reject) => {
        console.log('Reading a user from a database...');
        setTimeout(() => {
            resolve({id: id, githubUserName: 'msoysal'});
        }, 2000);
    }));
}


function getRepositories(username) {
    return new Promise(((resolve, reject) => {
        console.log('Calling github APIs....');
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    }));
}

function getCommits(repository) {
    return new Promise(((resolve, reject) => {
        console.log('Calling github APIs....');
        setTimeout(() => {
            resolve(['commit']);
        }, 2000);
    }));
}