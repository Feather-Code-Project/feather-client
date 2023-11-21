import PropTypes from 'prop-types';

const CodeReviewSection = ({ children }) => {
  return (
    <div className="grid w-full p-6 border-2 rounded-xl shadow-md mb-4">
      {children}
    </div>
  );
};

CodeReviewSection.propTypes = {
  children: PropTypes.any,
};

export default CodeReviewSection;