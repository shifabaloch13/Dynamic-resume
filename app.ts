document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
  
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); 
  
  
        const name = (document.getElementById('name') as HTMLInputElement)?.value ?? '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value ?? '';
        const phone = (document.getElementById('phone') as HTMLInputElement)?.value ?? '';
        const education = (document.getElementById('educationTextarea') as HTMLTextAreaElement)?.value ?? '';
        const experience = (document.getElementById('experienceTextarea') as HTMLTextAreaElement)?.value ?? '';
        const skills = (document.getElementById('skillsTextarea') as HTMLTextAreaElement)?.value ?? '';
  
        console.log({ name, email, phone, education, experience, skills }); 
  
        const resumeHTML = `
          <h2>Resume</h2>
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h3>Experience</h3>
          <p>${experience}</p>
          <h3>Skills</h3>
          <p>${skills}</p>
        `;
  
        resumeOutput.innerHTML = resumeHTML;
    });
  });