

DOMAIN = {'twitter': {
    'schema': {
            'favorite_count': {
                'type': 'string'
            }
        }
    }
}



# Let's just use the local mongod instance. Edit as needed.

# Please note that MONGO_HOST and MONGO_PORT could very well be left
# out as they already default to a bare bones local 'mongod' instance.
MONGO_HOST = '62.210.151.232'
MONGO_PORT = 27017

# Skip these if your db has no auth. But it really should.
MONGO_USERNAME = 'twit'
MONGO_PASSWORD = '12345'

MONGO_DBNAME = 'twitter'