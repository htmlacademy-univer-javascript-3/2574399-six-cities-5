import { useAppDispatch } from '../../hooks/index.ts';
import { setFavourites } from '../../store/apiActions.ts';
import { OfferDescription } from '../../types/offerDescription.ts';
import MainPageCard from '../MainPageCard/MainPageCard.tsx';

type OfferListProps = {
  onListItemHover: (listItemName: string) => void;
  offer:OfferDescription[];
  isMainPage:boolean;
  city:string;
};

function OfferList(OfferListProps:OfferListProps){
  const { onListItemHover, offer , isMainPage,city} = OfferListProps;
  const dispatch = useAppDispatch();
  const onFavouriteClick = (id:string, status:number, isOfferPage:boolean) => {
    const favouriteInfo = {
      offerId:id,
      status: status,
      isOfferPage: isOfferPage
    };
    dispatch(setFavourites(favouriteInfo));
  };

  return(
    <div className={isMainPage ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'} data-testid = 'offerlist-test'>
      {offer.filter((i)=>i.city.name === city).map((offerItem) => (
        <MainPageCard
          key={offerItem.id}
          offer={offerItem}
          onListItemHover={onListItemHover}
          isMainPage={isMainPage}
          onFavouriteClick={onFavouriteClick}
        />
      ))}
    </div>
  );
}

export default (OfferList);
