import React from 'react';
import { footerData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className='bg-dark section'>
      <div className='container mx-auto'>
        <motion.div
          variants={staggerContainer}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='flex flex-col lg:flex-row lg:justify-between text-white gap-x-5 gap-y-14'
        >
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            <div className='font-primary text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            <div className='leading-relaxed text-[#DBDBDB]'>
              {about.subtitle}
            </div>
            <div className='flex flex-col gap-y-4 font-semibold text-[#DBDBDB]'>
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col xl:items-center'
          >
            <div>
              <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='flex flex-col gap-y-4 text-[#DBDBDB]'>
                {links.items.map((item, index) => {
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a className='hover:text-white transition' href={href}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {program.title}
            </div>
            <ul className='flex flex-col gap-y-4 text-[#DBDBDB]'>
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </motion.div>
          <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {newsletter.title}
            </div>
            <div className='leading-relaxed mb-9 text-[#DBDBDB]'>
              {newsletter.subtitle}
            </div>
            <form className='flex  justify-between items-start border-b border-[#B6B6B6]'>
              <input
                className='outline-none placeholder:text-base italic placeholder:capitalize  bg-transparent pb-2'
                type='text'
                placeholder={newsletter.form.placeholder}
              />
              <button type='submit' className='text-2xl cursor-pointer'>
                {newsletter.form.icon}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
