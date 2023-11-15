import PropTypes from "prop-types";

const MentorSection = ({ children }) => {
  return (
    <div className="grid w-full p-6 border-2 rounded-xl shadow-md mb-4">
      {children}
    </div>
  );
};

MentorSection.propTypes = {
  children: PropTypes.any,
};

export default MentorSection;
