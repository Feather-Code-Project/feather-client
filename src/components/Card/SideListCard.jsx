import PropTypes from "prop-types";

const SideListCard = ({ title, children }) => {
  return (
    <div className="grid w-full h-[280px] border-2 rounded-xl shadow-md p-4">
      <div>
        <div className="grid self-start justify-items-center pb-2">{title}</div>
        <div className="w-full h-[1px] bg-[#A1A1A1]"></div>
      </div>
      {children}
    </div>
  );
};

SideListCard.propTypes = {
  title: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default SideListCard;
