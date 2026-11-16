from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    # password shoud only be set(post) not read
    password=serializers.CharField(write_only=True,style={'input_type':'password'},min_length=8)
    class Meta:
        model=User
        fields=['username',"password","email"]

    def create(self,validated_data):
        # automatically validate data entered from form

        # create user - validated data passed from whatever parameter in fields variable
        
        # Note: if we use User.objects.create- it will save the password in plaintext. User.objects.create_user automatically hashes the password

        # user=User.objects.create_user(**validated_data),this only will accept email username and password

        # manually passing validated data
        user=User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        return user
