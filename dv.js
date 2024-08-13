document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.getElementById('toggle-img');
    const toggleBtn = document.getElementById('toggle-btn');

    const images = ["https://lh3.googleusercontent.com/pw/AP1GczP2W2rBpacF7p70efzlamv4QDhJfsbzH85X5thfb4yp4r5mo1FsNUkco4qaXzCsCZ4Nb5FiX2A84j15uVDMxHqPTLLvfeW8zxffzpNiK21J538m_Ug=w2400", 'https://lh3.googleusercontent.com/pw/AP1GczPT4-2_Wtc5QrZUprYjz9HBmJMsvM3paqgYUlmIY2ZZoae5lq_31d3nuZ5JNxlz4mel45LqTsHRUDfeAcHS6q32AuerxEgpaLBzeu53B7zvSJgGp2w=w2400']; 
    let currentIndex = 0; 

    toggleBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; 
        imgElement.src = images[currentIndex]; 
    });
});