__author__ = 'haitham'
from json import JSONEncoder, JSONDecoder

from data import DataTest


class JsonDecoder(JSONDecoder):
    def __init__(self, object_hook=None, *args, **kargs):
        if object_hook is None:
            object_hook = self.object_hooks
        super(JsonDecoder, self).__init__(object_hook=object_hook, *args, **kargs)

    def object_hooks(self, json_object):
        if json_object['type'] == 'data':
            return DataTest(json_object['int'], json_object['str'], json_object['obj'])


class JsonEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__