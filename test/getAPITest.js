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
                console.log("body : "+ JSON.stringify(res.body));
                res.body.should.have.property('page').be.eql(2);
                res.body.should.have.property('total_pages').be.eql(4);
                res.body.data[0].should.have.property('first_name').be.eql('Eve');
                res.body.data[1].should.have.property('first_name').be.eql('Charles');
                res.body.data[2].should.have.property('first_name').be.eql('Tracey');
                done();
            });
    });


});