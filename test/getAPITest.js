/**
 * Created by kaushik mahata 04/25/2018.
 */

//var config = require('./../config/');
var chai = require('chai');
var server ;
var config = require('./../config/config.json');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var should = chai.should();

describe('auth token API', function() {
    this.timeout(20000);

    before(function (done) {
            server = config.baseURI ;
            done();

    });

    it('get users api', function(done){

        chai.request(server)
            .get('/api/users?page=2')
            .end(function(err, res){
                res.should.have.status(200);
                console.log("token : "+ JSON.stringify(res.body));
                /*res.body.should.have.property('result').be.eql(true);
                res.body.should.have.property('token');*/
                done();
            });
    });


});