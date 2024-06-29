import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twiter from '../../assets/images/twitter.png' 

const Footer = () => {
    return (
        <footer className='text-white text-center'>
        <div className='flex justify-center'>
          <div className='bg-[#1F2937] flex-1 py-24'>
            <h4 className='text-[32px] font-medium mb-[24px]'>CONTACT US</h4>
            <p className='space-y-2'>
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00 <br />
            </p>
          </div>
          <div className='bg-[#111827] flex-1 py-24'>
              <h4 className='text-[32px] font-medium mb-[24px]'>Follow US</h4>
              <p>Join us on social media</p>
              <div className='flex justify-center mt-8 gap-8'>
                  <img src={facebook} alt="" />
                  <img src={instagram} alt="" />
                  <img src={twiter} alt="" />
              </div>
          </div>
        </div>
        <p className='bg-[#151515] py-5'>Copyright © CulinaryCloud. All rights reserved.</p>
      </footer>
    );
};

export default Footer;