import moment from 'moment';

const formatDate = (date) => {
    console.log(date);

  return moment(date).format("YYYY/MM/DD");
}

export default formatDate;