import React, { useState } from 'react';
import { interviewData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Interview = () => {
  const { title, btnText, btnIcon } = interviewData;
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.section
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className="section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <motion.h3
              variants={fadeIn('down')}
              className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize  mb-8"
            >
              {title}
            </motion.h3>
            <motion.div variants={fadeIn('down')}>
              <div
                className="text-white flex items-center gap-x-5 cursor-pointer hover:opacity-80 transition"
                onClick={() => setOpen(true)}
              >
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
                  <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                    <div className="pl-1">{btnIcon}</div>
                  </div>
                </div>
                <div className="font-primary uppercase tracking-[0.1em]">
                  {btnText}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;
