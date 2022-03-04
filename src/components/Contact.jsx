const Contact = () => {
    return <div id="contact">
        <div className="details"><a href="#">khushalaniaman1@gmail.com</a></div>
        <div className="details"><a href="#">+91 8505069888</a></div>
        <div className="details"><a style={{textDecoration:"none"}} href="#">13/321 Shiv Kripa, <br />
            Sindhi Colony, Madanganj - Kishangarh <br />
            305801 , Rajasthan</a></div>
    </div>
}

const Social = () => {
    return <div id="social">
        <div><i className='bx bxl-facebook-square'></i></div>
        <div><i className='bx bxl-instagram' ></i></div>
        <div><i className='bx bxl-twitter' ></i></div>
        <div><i className='bx bxl-whatsapp' ></i></div>
    </div>
}

export {Contact , Social};