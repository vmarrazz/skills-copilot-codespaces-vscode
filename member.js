function skillsMember() {
    let member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        // Method
        showSkills: function() {
            this.skills.forEach((skill, index) => {
                console.log(`Skill ${index + 1}: ${skill}`);
            });
        }
    };

    member.showSkills();
}