class ApiFeatures{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }

    filter(){
        const queryObj = {...this.queryString};
        const excludeFields = ['page','sort','limit','fields'];
        excludeFields.forEach(field=> delete queryObj[field]);

        let queryStr = JSON.stringify(queryObj);

        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this
    }

    sort(){
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-price')
        }

        return this
    }
}


module.exports = ApiFeatures;