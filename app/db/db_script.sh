
cmd=$1

# run the script with the following command:
# sudo bash db_script.sh <option>
# options:
#   populate: populates the database with the data from db_populate.sql
#   clear: clears the database
#   create: creates the database
#   drop: drops the database

case $cmd in
    populate)
        cd 2022-2-PUMA-ApiGateway
        sudo docker cp ../db_populate.sql $(sudo docker-compose ps -q db):/db_populate.sql
        sudo docker-compose exec db psql -U pumaadmin -d puma -f /db_populate.sql
        cd ..
    ;;
    clear)
        cd 2022-2-PUMA-ApiGateway
        sudo docker cp ../db_clear.sql $(sudo docker-compose ps -q db):/db_clear.sql
        sudo docker-compose exec db psql -U pumaadmin -d puma -f /db_clear.sql
        cd ..
    ;;
    create)
        cd 2022-2-PUMA-ApiGateway
        sudo docker cp ../db_create.sql $(sudo docker-compose ps -q db):/db_create.sql
        sudo docker-compose exec db psql -U pumaadmin -d puma -f /db_create.sql
        cd ..
    ;;
    drop)
        cd 2022-2-PUMA-ApiGateway
        sudo docker cp ../db_drop.sql $(sudo docker-compose ps -q db):/db_drop.sql
        sudo docker-compose exec db psql -U pumaadmin -d puma -f /db_drop.sql
        cd ..
    ;;
    *)
        echo Wrong option
    ;;
esac
