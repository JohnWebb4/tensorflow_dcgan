FROM tensorflow/tensorflow:latest-gpu

WORKDIR /app

COPY ./training /app

RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y \
  python-tk \
&& rm -rf /var/lib/apt/lists/*

CMD [ "python", "dcgan.py" ]
