// import React from 'react'

const articleImages = [
  {
    header: `Ways To Get In Touch`,
  },
  {
    header: `Click the “Let’s Chat!” button to talk with a live representative.`,
  },
  {
    header: `call: 1 (888) 733-5041

Monday-Friday: 8AM-6PM
Saturday: 7:30AM-12:30PM`,
  },
  {
    header: `Bank Telephone: 1 (800) 856-5807`,
  },
];

const ContactSecond = () => {
  return (
    <div>
      <section className="section">
        <div className="container w-full sm:w-4/5 m-auto">
          <div className="articles grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 mb-14">
            {articleImages.map((image, index) => {
              return (
                <article key={index} className="shadow-md  flex flex-col">
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      {image.header}
                    </h2>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSecond;
