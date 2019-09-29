# Create a Django Project

### Start a Project

`django-admin startproject firstdjango .`

### Start an Application

1. Create a new application

`python manage.py startapp firstapp`

2. Crreate a database

`python manage.py migrate`

3. Add app name to `INSTALLED_APPS` in `settings.py`

### MVC

* Configure URL routes in `urls.py`
* Create templated views in `myapp/templates/myapp`
* Put static files in `myapp/static/myapp`
* Create controllers in `myapp/views.py`
