FROM python:3.6

ARG project_dir=/server/

ADD ./requirements.txt $project_dir

WORKDIR $project_dir

RUN pip install -r requirements.txt


# PYTHONPATH の設定
ENV PYTHONPATH=/server

