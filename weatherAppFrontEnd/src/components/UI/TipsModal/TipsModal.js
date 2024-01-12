import Card from "../Card/";
import Backdrop from "../Backdrop/";
import Button from "../Button/";

const TipsModal = ({ tips, onTipsConfirmBtnClick }) => {
  return (
    <Backdrop>
      <Card className="w-[500px] h-[200px] max-xs:max-w-[250px] bg-white absolute m-auto top-0 bottom-0 right-0 left-0 flex flex-col p-2">
        <div className="h-[140px] text-2xl flex items-center justify-center">
          <p>{tips}</p>
        </div>
        <div className="flex flex-auto justify-end">
          <Button className="mx-[10px]" onClick={onTipsConfirmBtnClick}>
            Confirm
          </Button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default TipsModal;
