document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        event.preventDefault();
        var name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        var email = (_d = (_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        var phone = (_f = (_e = document.getElementById('phone')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        var education = (_h = (_g = document.getElementById('educationTextarea')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
        var experience = (_k = (_j = document.getElementById('experienceTextarea')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
        var skills = (_m = (_l = document.getElementById('skillsTextarea')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : '';
        console.log({ name: name, email: email, phone: phone, education: education, experience: experience, skills: skills });
        var resumeHTML = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
        resumeOutput.innerHTML = resumeHTML;
    });
});