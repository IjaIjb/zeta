import React from "react";

const ContactMap = () => {
  return (
    <div>
    <iframe
  className="w-full h-[305px]"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.462642693745!2d3.4497188999999997!3d6.4629224999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf48d72886035%3A0x8ca6631fe3d93d78!2sChurch%20Of%20The%20Nativity!5e0!3m2!1sen!2sng!4v1724797335365!5m2!1sen!2sng"
  title="Google Map showing address"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

    </div>
  );
};

export default ContactMap;
