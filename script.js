
document.getElementById("about").addEventListener("click", function () {
    
    document.querySelector(".subcontainer").classList.add("fadeIn");
    document.querySelector(".container1").classList.add("fadeIn");
    document.querySelector(".center-image-container").classList.add("slideIn");
    document.querySelectorAll(".card-animation").forEach(function (element) {
        element.classList.add("fadeIn");
    });
});

const pyqData = [
    
    { department: 'Computer Science and Engineering', semester: '3', title: 'GE2201 - Engineering Mathematics-3', link: 'https://drive.google.com/file/d/1Kb630myu40qt4FbVn-QSvruIViRVdA7i/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '3', title: 'CSE2204 - Data Structures-1', link: 'https://drive.google.com/file/d/10bvJBGYVhNHYzOQP95TEfQnviI2BMBGD/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '3', title: 'CSE2201 - Computer Architecture & organisation', link: 'https://drive.google.com/file/d/10gsPAizvgi9yG3HO7qqSCv7c1n0JuE8h/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '3', title: 'CSE2202 - Object oriented programming', link: 'https://drive.google.com/file/d/10lvkJmRnfck1SQ-asPR0R6_7E2gA5lys/view?usp=drivesdk' },

    { department: 'Computer Science and Engineering', semester: '4', title: 'GE2207 - DMGT', link: 'https://drive.google.com/file/d/10Vb4MUhC1bOHUdhgdClTmpTUIkyKWpWA/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '4', title: 'CSE2253 - Data Structures-2', link: 'https://drive.google.com/file/d/10N9iVwPVLXztnpIeNj9F1dbx33GctXBE/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '4', title: 'CSE2255 - IDA', link: 'https://drive.google.com/file/d/10JfPq1-bC-31iXr5r4lhxAPzUsNoRgd2/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '4', title: 'CSE2251 - Operating system', link: 'https://drive.google.com/file/d/10KUiSS7UUqX1NZQgpONUMQS5FgkEfYs4/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '4', title: 'CSE2257 - TOC', link: 'https://drive.google.com/file/d/10PXlt8v1otlUguDnUkZozODIz3eBMK7-/view?usp=drivesdk' },

    { department: 'Computer Science and Engineering', semester: '5', title: 'CSE2303 - DAA', link: 'https://drive.google.com/file/d/10CNeufYsodiIK7nRMPuH6oumNQYy6P2d/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '5', title: 'CSE2301 - DBMS', link: 'https://drive.google.com/file/d/106Ux4QRnYYPjDVJ1a9uxT-WIL86gT_mp/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '5', title: 'GE2312 - FOE', link: 'https://drive.google.com/file/d/10FZmA-xTjFIdSQWc2Kda4m6YIO3Tho9S/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '5', title: 'CSE2311 - Business Intelligence', link: 'https://drive.google.com/file/d/10HbPkqsKwJ87NiUduX6C5askXMlcv70Q/view?usp=drivesdk' },

    { department: 'Computer Science and Engineering', semester: '6', title: 'CSE2355 - software engineering', link: 'https://drive.google.com/file/d/1xv0V4bA3yt77EQrgXka-2uH7g3AIYVjh/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '6', title: 'CSE2353 - compiler', link: 'https://drive.google.com/file/d/1xwSCzin5luoUyWuB0_ZAfTjwWjksnTTd/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '6', title: 'GE2311 - FOM', link: 'https://drive.google.com/file/d/1xxqcg6P__JSBhpuLdi6WzTy1DSfnK_p_/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '6', title: 'CSE2351 - Computer Networks', link: 'https://drive.google.com/file/d/1xvBOL1hJCsqaACXmVJMhZW4VY4eaaPQ-/view?usp=drivesdk' },
    { department: 'Computer Science and Engineering', semester: '6', title: 'CSE2363 - IOT', link: 'https://drive.google.com/file/d/1xxxlIeQgLVk2TAqQl-EfivYM1Jmb_F6x/view?usp=drivesdk' },

    { department: 'Electronics', semester: '3', title: 'EE2201 - Electronic Devices', link: 'https://drive.google.com/file/d/1KkSqQKiPl2pw-QpEdfaS8tnSQ4SWrzLM/view?usp=drivesdk' },
    { department: 'Electronics', semester: '3', title: 'EE2207 - Network Analysis', link: 'https://drive.google.com/file/d/1KmyG8HPZCfY7i_xlhKCyY-VJXEWFc8AY/view?usp=drivesdk' },
    { department: 'Electronics', semester: '3', title: 'EE2205 - Digital logic Design', link: 'https://drive.google.com/file/d/1KrlNGcE_LvtQ37aerkWJl-BMYy2zb2W4/view?usp=drivesdk' },
    { department: 'Electronics', semester: '3', title: 'EE2203 - Signals and Systems', link: 'https://drive.google.com/file/d/1L-Zw8cmZqkDMhN_XV-qDGK-9j_bKZvQl/view?usp=drivesdk' },
    { department: 'Electronics', semester: '3', title: 'GE2201 - Engineering Mathematics-3', link: 'https://drive.google.com/file/d/1Kb630myu40qt4FbVn-QSvruIViRVdA7i/view?usp=drivesdk' },

    { department: 'Electronics', semester: '4', title: 'EE2255 - Analog Communication', link: 'https://drive.google.com/file/d/1L6oceLzgZ5G1_t22M2hSPcSa-sk94vfY/view?usp=drivesdk' },
    { department: 'Electronics', semester: '4', title: 'GE2204 - Advance Mathematical Technique', link: 'https://drive.google.com/file/d/1LFaCkSeJZFSN83hAOF7mfEuXYQJ9lnEM/view?usp=drivesdk' },
    { department: 'Electronics', semester: '4', title: 'EE2251 - Electronic Circuits', link: 'https://drive.google.com/file/d/1LJbzt7ebwFuD5XWVNtmF2ahjk521xzSg/view?usp=drivesdk' },
    { department: 'Electronics', semester: '4', title: 'EE2257 - Electromagnetic fields', link: 'https://drive.google.com/file/d/1LP1KxUX5cOqNALNZyOxZeh_qY9fGlN9f/view?usp=drivesdk' },
    { department: 'Electronics', semester: '4', title: 'EE2253 - Microcontroller and its applications', link: 'https://drive.google.com/file/d/1LAqT9he7BQD_vcCLWknyTKjXZsLXgJu_/view?usp=drivesdk' },

    { department: 'Electronics', semester: '5', title: 'EE2303 - Analog integrated circuit and application', link: 'https://drive.google.com/file/d/1qH3AjfX9N9dP-JX0yg4VjyFjBKihg7iz/view?usp=drivesdk' },
    { department: 'Electronics', semester: '5', title: 'EE2317 - Applied machine learning', link: 'https://drive.google.com/file/d/1phM3RyiEKmb7nJy9bxd5URkN8hp_Us3Y/view?usp=drivesdk' },
    { department: 'Electronics', semester: '5', title: 'EE2301 - Digital signal processing', link: 'https://drive.google.com/file/d/1r9wAg9eVgPywa3Qlhv_OXPquXjTb4cDU/view?usp=drivesdk' },
    { department: 'Electronics', semester: '5', title: 'GE2311 - Fundamentals of management', link: 'https://drive.google.com/file/d/1prC8VEtiqjZqnI0TyXn6YVKvwlnSdnSN/view?usp=drivesdk' },

    { department: 'Electronics', semester: '6', title: 'EE2351 - Control system engineering', link: 'https://drive.google.com/file/d/1qkDES1AEINd46V4g-vgGTV_eHgFRycDZ/view?usp=drivesdk' },
    { department: 'Electronics', semester: '6', title: 'EE2353 - Digital communication', link: 'https://drive.google.com/file/d/1qdAMcY6tq1ITmKgKxJ9GjAuFwJHpAbH4/view?usp=drivesdk' },
    { department: 'Electronics', semester: '6', title: 'GE2312 - Fundamentals of economics', link: 'https://drive.google.com/file/d/1qUEcTWpQqQX7szCAR2uy9ERg8IgBVbZt/view?usp=drivesdk' },
    { department: 'Electronics', semester: '6', title: 'EE2365 - Digital image processing', link: 'https://drive.google.com/file/d/1qWquqH-owNDkURwbgU5mgmQo7_-EoKUg/view?usp=drivesdk' },
    { department: 'Electronics', semester: '6', title: 'EE2352 - Transmission line and waveguides', link: 'https://drive.google.com/file/d/1qdmiUWlcaBRT4NI7bl1MLt5Ok5DSXzuL/view?usp=drivesdk' },
    
    { department: 'Information Technology', semester: '6', title: 'IT2353 - Principles of compiler design', link: 'https://drive.google.com/file/d/1rxE5bzjNCe9klQHra4qQcbbt-f8d6j45/view?usp=drivesdk' },
    { department: 'Information Technology', semester: '6', title: 'IT2351 - Design and analyas of algorithms', link: 'https://drive.google.com/file/d/1rjJjBp22FtDA_EEK4qF8pbCUiyYevYLd/view?usp=drivesdk' },
    { department: 'Information Technology', semester: '6', title: 'GE2311 - Fundamentals of management', link: 'https://drive.google.com/file/d/1rv5K-EEHjFBXDoA2Wlm-y45K5xhEp79a/view?usp=drivesdk' },
    { department: 'Information Technology', semester: '6', title: 'IT2367 - Big data analytics', link: 'https://drive.google.com/file/d/1rvmE-TPIMJiMmmqG5vr8lCBbW6H0qcj_/view?usp=drivesdk' },

    { department: 'Computer Technology', semester: '3', title: 'CT2204 - Data Structures', link: 'https://drive.google.com/file/d/15V1GaThOY0e6xmZQpuDJk3COkxsP5Tcp/view?usp=drivesdk' },
    { department: 'Computer Technology', semester: '3', title: 'CT2202 - Object oriented programming', link: 'https://drive.google.com/file/d/15XHXyTHlC-KTZhRNA3Z6Ic_r1bj78oC6/view?usp=drivesdk' },

    { department: 'Computer Technology', semester: '6', title: 'CT2361 - DIP', link: 'https://drive.google.com/file/d/15jbvt6t7iBLlXyNXHQ3mJyhQuKASX1Xj/view?usp=drivesdk' },


    { department: 'Open Elective 1', semester: '5', title: 'CSE2331 - Database system essential', link: 'https://drive.google.com/file/d/1qxi_6O9zCML7EnIxQW3xZB0mRQzrYNQh/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '5', title: 'ME2335 - Robotics and subtractive manufacturing', link: 'https://drive.google.com/file/d/1rDOKL7rVpikW3134KTkaCCvZNE1-Nwba/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '5', title: 'CSD2382 - Multimedia design', link: 'https://drive.google.com/file/d/1r9dPPWN1rhZ9_IQarfE2vAJbfo3FUaW3/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '5', title: 'GE2375 - Fuzzy set theory', link: 'https://drive.google.com/file/d/11RnOsSH-JIwkh9PVeVl96bhVh60fQ5rQ/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '5', title: 'GE2314 - Combinatorics', link: 'https://drive.google.com/file/d/11L0NHIkdZHfDE66IbAtqYAN13bz1VL40/view?usp=drivesdk' },
    
    { department: 'Open Elective 2', semester: '5', title: 'GE2370 - Intro to french language', link: 'https://drive.google.com/file/d/1r8qoqe0vI3IyFyfjkAFtP4DMt4zs0VnU/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '5', title: 'EE2391 - Data acquisition and signal conditioning', link: 'https://drive.google.com/file/d/1rEnPm8uf3e9fVGlKLX4alobyZv1qnSdt/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '5', title: 'IT2333 - concepts in web programming', link: 'https://drive.google.com/file/d/1qxif5RUpXX43sNNK8MCggRXtkZG9Sjza/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '5', title: 'GE2375 - Fuzzy set theory', link: 'https://drive.google.com/file/d/11Pa8Dqt2Ev7PHCU2BSLvUhoL1ozg9CIp/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '5', title: 'EL2323 - power system engineering', link: 'https://drive.google.com/file/d/15jfmfqouC2Bv3EQS5LQXVyx050bo0kok/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '5', title: 'ME2392 - Reliability engineering', link: 'https://drive.google.com/file/d/11LzKhrQNWwk3jkD-uFytEiSDLjNyt0zU/view?usp=drivesdk' },

    { department: 'Open Elective 1', semester: '6', title: 'CSE2331 - Database system essential', link: 'https://drive.google.com/file/d/1qxi_6O9zCML7EnIxQW3xZB0mRQzrYNQh/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '6', title: 'ME2335 - Robotics and subtractive manufacturing', link: 'https://drive.google.com/file/d/1rDOKL7rVpikW3134KTkaCCvZNE1-Nwba/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '6', title: 'CSD2382 - Multimedia design', link: 'https://drive.google.com/file/d/1r9dPPWN1rhZ9_IQarfE2vAJbfo3FUaW3/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '6', title: 'GE2375 - Fuzzy set theory', link: 'https://drive.google.com/file/d/11RnOsSH-JIwkh9PVeVl96bhVh60fQ5rQ/view?usp=drivesdk' },
    { department: 'Open Elective 1', semester: '6', title: 'GE2314 - Combinatorics', link: 'https://drive.google.com/file/d/11L0NHIkdZHfDE66IbAtqYAN13bz1VL40/view?usp=drivesdk' },
    
    { department: 'Open Elective 2', semester: '6', title: 'GE2370 - Intro to french language', link: 'https://drive.google.com/file/d/1r8qoqe0vI3IyFyfjkAFtP4DMt4zs0VnU/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '6', title: 'EE2391 - Data acquisition and signal conditioning', link: 'https://drive.google.com/file/d/1rEnPm8uf3e9fVGlKLX4alobyZv1qnSdt/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '6', title: 'IT2333 - concepts in web programming', link: 'https://drive.google.com/file/d/1qxif5RUpXX43sNNK8MCggRXtkZG9Sjza/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '6', title: 'GE2375 - Fuzzy set theory', link: 'https://drive.google.com/file/d/11Pa8Dqt2Ev7PHCU2BSLvUhoL1ozg9CIp/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '6', title: 'EL2323 - power system engineering', link: 'https://drive.google.com/file/d/15jfmfqouC2Bv3EQS5LQXVyx050bo0kok/view?usp=drivesdk' },
    { department: 'Open Elective 2', semester: '6', title: 'ME2392 - Reliability engineering', link: 'https://drive.google.com/file/d/11LzKhrQNWwk3jkD-uFytEiSDLjNyt0zU/view?usp=drivesdk' },
];

document.getElementById('departmentFilter').addEventListener('change', filterPYQs);
document.getElementById('semesterFilter').addEventListener('change', filterPYQs);

function filterPYQs() {
    const department = document.getElementById('departmentFilter').value;
    const semester = document.getElementById('semesterFilter').value;
    const container = document.getElementById('pyqContainer');

    container.innerHTML = '';

    const filteredData = pyqData.filter(pyq => {
        return (department === '' || pyq.department === department) &&
            (semester === '' || pyq.semester === semester);
    });

    filteredData.forEach(pyq => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card bg-dark text-dark">
                <div class="card-body">
                    <h5 class="card-title">${pyq.title}</h5>
                    <p class="card-text">Department: ${pyq.department}</p>
                    <p class="card-text">Semester: ${pyq.semester}</p>
                    <a href="${pyq.link}" target="_blank" class="btn btn-primary">View PYQ</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}


//contact
function initMap() {
    const location = { lat: 21.1458, lng: 79.0882 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
